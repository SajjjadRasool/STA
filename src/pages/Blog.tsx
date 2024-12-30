import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/blog/BlogCard';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog - Street Wise Ads | Mobile Advertising Insights"
        description="Explore the latest insights about mobile advertising in Karachi. Learn about rickshaw advertising, route optimization, and creative outdoor marketing strategies."
        keywords="mobile advertising blog, rickshaw advertising tips, outdoor marketing Karachi, advertising insights"
      />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Latest Insights</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}