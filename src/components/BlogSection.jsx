'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogSection.module.css';

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Dental Practice Management",
    excerpt: "Discover how top clinics are using AI to automate workflows, reduce no-shows, and increase patient satisfaction.",
    category: "Technology",
    date: "Oct 12, 2026",
    imageUrl: "/images/blog_tech.png",
    link: "/blog/ai-dental-practice-management"
  },
  {
    id: 2,
    title: "5 Strategies to Boost Case Acceptance Rates",
    excerpt: "Learn the communication frameworks that turn hesitant consults into confident, booked treatments.",
    category: "Growth",
    date: "Sep 28, 2026",
    imageUrl: "/images/blog_growth.png",
    link: "/blog/boost-case-acceptance-rates"
  },
  {
    id: 3,
    title: "The Ultimate Guide to WhatsApp Marketing for Dentists",
    excerpt: "Stop relying on emails no one reads. Here is how to use WhatsApp to reactivate dormant patients instantly.",
    category: "Marketing",
    date: "Sep 15, 2026",
    imageUrl: "/images/blog_marketing.png",
    link: "/blog/whatsapp-marketing-dentists"
  }
];

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Latest Insights & Resources</h2>
          <p>Strategies, tips, and guides to help your clinic grow faster.</p>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  fill 
                  className={styles.image} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.viewAllWrapper}>
          <Link href="/blog" className={styles.viewAllBtn}>
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
