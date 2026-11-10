import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { BlogEditor } from "@/components/blog-editor"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function NewPostPage() {
  const supabase = await createClient()

  let user = null
  try {
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      redirect("/auth/login")
    }
    user = data.user
  } catch {
    redirect("/auth/login")
  }

  const authorName = user.user_metadata?.display_name || user.email || "Anonymous"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to blog
          </Link>
          <h1 className="text-3xl font-serif mt-4">Write a New Post</h1>
          <p className="text-muted-foreground mt-1">Share your thoughts with the McMansion community</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <BlogEditor authorName={authorName} userId={user.id} />
      </main>
    </div>
  )
}
