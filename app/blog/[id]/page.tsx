import type React from "react"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, PenLine } from "lucide-react"
import { DeletePostButton } from "@/components/delete-post-button"
import Image from "next/image"

interface Post {
  id: string
  title: string
  content: string
  author_name: string
  user_id: string
  created_at: string
  updated_at: string
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  if (id === "new") {
    const { redirect } = await import("next/navigation")
    redirect("/blog/new")
  }

  const supabase = await createClient()

  const { data: user } = await supabase.auth.getUser()

  const { data: post, error } = await supabase.from("posts").select("*").eq("id", id).single()

  if (error || !post) {
    notFound()
  }

  const isAuthor = user?.user?.id === post.user_id

  const renderContent = (text: string) => {
    return text.split("\n").map((line: string, index: number) => {
      // Headings
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-serif font-bold mt-8 mb-4 text-primary">
            {line.slice(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-serif font-semibold mt-6 mb-3 text-primary">
            {line.slice(3)}
          </h2>
        )
      }
      // Blockquote
      if (line.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-accent pl-4 my-4 italic text-muted-foreground bg-muted/30 py-2 pr-4 rounded-r"
          >
            {line.slice(2)}
          </blockquote>
        )
      }
      // List item
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 list-disc text-foreground leading-relaxed">
            {renderInlineFormatting(line.slice(2))}
          </li>
        )
      }
      // Image
      const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/)
      if (imageMatch) {
        return (
          <figure key={index} className="my-6">
            <Image
              src={imageMatch[2] || "/placeholder.svg"}
              alt={imageMatch[1]}
              width={800}
              height={500}
              className="rounded-lg w-full object-cover"
            />
            {imageMatch[1] && (
              <figcaption className="text-center text-sm text-muted-foreground mt-2">{imageMatch[1]}</figcaption>
            )}
          </figure>
        )
      }
      // Empty line
      if (line.trim() === "") {
        return <div key={index} className="h-4" />
      }
      // Regular paragraph with inline formatting
      return (
        <p key={index} className="text-foreground leading-relaxed mb-4">
          {renderInlineFormatting(line)}
        </p>
      )
    })
  }

  const renderInlineFormatting = (text: string) => {
    // Handle links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    // Handle bold **text**
    const boldRegex = /\*\*([^*]+)\*\*/g
    // Handle italic *text*
    const italicRegex = /\*([^*]+)\*/g

    let result = text
    const elements: React.ReactNode[] = []
    const lastIndex = 0
    const key = 0

    // Simple parsing - replace patterns with placeholders then split
    result = result.replace(linkRegex, (_, linkText, url) => `{{LINK:${linkText}:${url}}}`)
    result = result.replace(boldRegex, (_, boldText) => `{{BOLD:${boldText}}}`)
    result = result.replace(italicRegex, (_, italicText) => `{{ITALIC:${italicText}}}`)

    const parts = result.split(/({{[^}]+}})/)

    return parts.map((part, i) => {
      if (part.startsWith("{{LINK:")) {
        const match = part.match(/{{LINK:(.+?):(.+?)}}/)
        if (match) {
          return (
            <a
              key={i}
              href={match[2]}
              className="text-accent underline hover:text-accent/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {match[1]}
            </a>
          )
        }
      }
      if (part.startsWith("{{BOLD:")) {
        const match = part.match(/{{BOLD:(.+?)}}/)
        if (match) {
          return (
            <strong key={i} className="font-bold">
              {match[1]}
            </strong>
          )
        }
      }
      if (part.startsWith("{{ITALIC:")) {
        const match = part.match(/{{ITALIC:(.+?)}}/)
        if (match) {
          return (
            <em key={i} className="italic">
              {match[1]}
            </em>
          )
        }
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to all posts
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance">{post.title}</h1>
          <div className="flex items-center gap-2 mt-6 text-muted-foreground">
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

          {isAuthor && (
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
              <Button asChild variant="outline" size="sm">
                <Link href={`/blog/${post.id}/edit`}>
                  <PenLine className="w-4 h-4 mr-2" />
                  Edit
                </Link>
              </Button>
              <DeletePostButton postId={post.id} />
            </div>
          )}
        </header>

        <div className="prose prose-neutral max-w-none">{renderContent(post.content)}</div>
      </article>
    </div>
  )
}
