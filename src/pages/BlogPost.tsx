import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={`${post.title} - Street Wise Ads Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.image}
      />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
              <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}