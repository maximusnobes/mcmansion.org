import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { BlogEditor } from "@/components/blog-editor"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data: user, error: userError } = await supabase.auth.getUser()

  if (userError || !user?.user) {
    redirect("/auth/login")
  }

  const { data: post, error: postError } = await supabase.from("posts").select("*").eq("id", id).single()

  if (postError || !post) {
    notFound()
  }

  // Only the author can edit their post
  if (post.user_id !== user.user.id) {
    redirect(`/blog/${id}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to post
          </Link>
          <h1 className="text-3xl font-serif mt-4">Edit Post</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <BlogEditor
          postId={post.id}
          initialTitle={post.title}
          initialContent={post.content}
          authorName={post.author_name}
          userId={user.user.id}
        />
      </main>
    </div>
  )
}
