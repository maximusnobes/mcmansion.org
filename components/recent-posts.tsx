import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Post {
  id: string
  title: string
  excerpt: string | null
  author_name: string
  created_at: string
}

export async function RecentPosts() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, excerpt, author_name, created_at")
    .order("created_at", { ascending: false })
    .limit(3)

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section id="blog" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              From the Community
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-balance">
              Recent Posts
            </h2>
          </div>

          {/* Posts List */}
          <div className="space-y-6">
            {posts.map((post: Post) => (
              <article key={post.id} className="border-b border-border pb-6 last:border-b-0">
                <Link href={`/blog/${post.id}`} className="group">
                  <h3 className="text-2xl font-serif group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </Link>
                {post.excerpt && (
                  <p className="text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                )}
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

          {/* View All Link */}
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
