import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PenLine } from "lucide-react"

interface Post {
  id: string
  title: string
  excerpt: string | null
  author_name: string
  created_at: string
}

export default async function BlogPage() {
  const supabase = await createClient()

  const { data: user } = await supabase.auth.getUser()

  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, excerpt, author_name, created_at")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to McMansion
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif mt-2">Community Blog</h1>
            <p className="text-muted-foreground mt-1">Stories and updates from our members</p>
          </div>
          <div className="flex items-center gap-3">
            {user?.user ? (
              <>
                <span className="text-sm text-muted-foreground hidden md:block">
                  {user.user.user_metadata?.display_name || user.user.email}
                </span>
                <Button asChild>
                  <Link href="/blog/new">
                    <PenLine className="w-4 h-4 mr-2" />
                    Write a Post
                  </Link>
                </Button>
              </>
            ) : (
              <Button asChild variant="outline">
                <Link href="/auth/login">Sign in to write</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Posts List */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {!posts || posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No posts yet.</p>
            <p className="text-muted-foreground mt-2">Be the first to share your story with the community!</p>
            {user?.user && (
              <Button asChild className="mt-6">
                <Link href="/blog/new">Write the first post</Link>
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post: Post) => (
              <article key={post.id} className="border-b border-border pb-8 last:border-b-0">
                <Link href={`/blog/${post.id}`} className="group">
                  <h2 className="text-2xl font-serif group-hover:text-accent transition-colors">{post.title}</h2>
                </Link>
                {post.excerpt && <p className="text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>}
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <span>By {post.author_name}</span>
                  <span>•</span>
                  <time dateTime={post.created_at}>
                    {new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
