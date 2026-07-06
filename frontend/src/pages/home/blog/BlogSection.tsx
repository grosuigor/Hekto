import { BlogCard, Section } from "@/components";
import { BLOGS } from "./data";
import styles from "./BlogSection.module.scss";

export function BlogSection() {
  return (
    <Section gap="2xl" title="Latest Blog">
      <div className={styles.grid}>
        {BLOGS.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </Section>
  );
}
