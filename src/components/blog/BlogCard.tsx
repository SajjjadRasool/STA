import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 hover:text-purple-600 transition">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <Link 
            to={`/blog/${post.slug}`}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}