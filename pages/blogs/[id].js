import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is defined and parse it as an integer
  const postId = id ? parseInt(id, 10) : null;
  const post = postId ? blogdata.find((post) => post.id === postId) : null;

  // Handle case where post is not found
  if (!post) {
    return (
      <div>
        <Head>
          <title>Post Not Found</title>
        </Head>
        <section className='post-details bg-top'>
          <div className='container'>
            <h1>Post Not Found</h1>
            <p>The post you are looking for does not exist.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='The Evolution of Marketing: From Traditional to Digital.' />
              <p className='desc-p'>
                The marketing realm has undergone a seismic shift over the past few decades...
              </p>
              <TitleSm title='The Digital Marketing Arsenal' />
              <p className='desc-p'>
                Search Engine Optimization (SEO): The cornerstone of digital marketing, SEO is the art of making your brand discoverable in the vast ocean of the internet...
              </p>
              <p className='desc-p'>
                Content Marketing: In the digital age, content is king. High-quality, relevant content not only attracts and engages customers but also builds brand authority...
              </p>
              <p className='desc-p'>
                Social Media Marketing: Social platforms are the new town squares, bustling with potential customers. Our social media strategies leverage the power of platforms like Facebook, Instagram, Twitter, and LinkedIn to create meaningful interactions...
              </p>
              <p className='desc-p'>
                Email Marketing: Despite the rise of new digital channels, email remains a powerful tool for nurturing leads and retaining customers...
              </p>
              <p className='desc-p'>
                Pay-Per-Click (PPC) Advertising: For immediate visibility and results, PPC campaigns are indispensable...
              </p>
            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='The Art of Branding: Crafting Identities That Resonate' />
              <p className='desc-p'>
                At Evoshpere Marketing, we believe that branding goes beyond logos and taglines...
              </p>
              <TitleSm title='Key Elements of Successful Branding' />
              <p className='desc-p'>
                Consistency: A consistent brand experience across all touchpoints builds trust and recognition...
              </p>
              <p className='desc-p'>
                Emotional Connection: Brands that evoke emotions create lasting impressions...
              </p>
              <TitleSm title='Case Studies: Our Success Stories' />
              <p className='desc-p'>
                Our track record speaks for itself. From transforming underperforming Shopify stores into e-commerce powerhouses to rebranding housing societies and elevating their market presence...
              </p>
              <TitleSm title='Shopify Success: A Tale of Transformation' />
              <p className='desc-p'>
                One of our notable successes involved a struggling Shopify store that was grappling with low traffic and poor conversions...
              </p>
              <TitleSm title='Rebranding Housing Societies: Creating Community Identities' />
              <p className='desc-p'>
                Rebranding a housing society involves more than just a new logo; it's about creating a sense of community and belonging...
              </p>
              <TitleSm title='The Future of Marketing: Innovation and Adaptation' />
              <p className='desc-p'>
                The marketing landscape is ever-evolving, with new technologies and trends emerging at a rapid pace...
              </p>
              <TitleSm title='Embracing AI and Automation' />
              <p className='desc-p'>
                Artificial intelligence and automation are revolutionizing marketing...
              </p>
              <TitleSm title='The Rise of Influencer Marketing' />
              <p className='desc-p'>
                Influencer marketing has emerged as a potent tool for reaching niche audiences and building brand credibility...
              </p>
              <TitleSm title='Conclusion' />
              <p className='desc-p'>
                In the dynamic world of marketing, success hinges on a blend of creativity, strategy, and continuous adaptation...
              </p>
              <p className='desc-p'>
                Join us on this journey and experience the transformative power of exceptional marketing...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
