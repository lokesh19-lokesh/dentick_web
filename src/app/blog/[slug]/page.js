import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Choose placeholder image based on slug
  let imageSrc = "/images/blog_tech.png";
  if (slug.includes("growth") || slug.includes("case")) imageSrc = "/images/blog_growth.png";
  if (slug.includes("marketing") || slug.includes("whatsapp")) imageSrc = "/images/blog_marketing.png";

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>
        
        <div className={styles.articleHeader}>
          <div className={styles.categoryBadge}>Article</div>
          <h1>{title}</h1>
          <div className={styles.meta}>Oct 12, 2026 &bull; 5 min read</div>
        </div>
        
        <div className={styles.heroImage}>
           <Image src={imageSrc} alt="Blog hero" fill className={styles.image} />
        </div>

        <article className={styles.content}>
          <p className={styles.lead}>This is a placeholder article for the topic: <strong>{title}</strong>.</p>
          <p>DentTick AI helps you automate clinic workflows effortlessly. In a full production build, this content would be dynamically loaded from a Headless CMS (like Sanity, Contentful, or Strapi) or a local markdown file system.</p>
          <h2>The Impact of Technology in Dentistry</h2>
          <p>Dental clinics that embrace automation are seeing unprecedented growth. By freeing up staff from manual follow-ups, they can focus on what matters most: the patient experience in the chair.</p>
          <div className={styles.ctaBox}>
            <h3>Ready to grow your clinic?</h3>
            <p>Book a free demo to see DentTick AI in action.</p>
            <Link href="#" className={styles.ctaBtn}>Book Demo</Link>
          </div>
        </article>
      </div>
    </main>
  );
}
