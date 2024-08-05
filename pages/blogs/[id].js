import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

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
              <p className='desc-p'> The marketing realm has undergone a seismic shift over the past few decades. Gone are the days when print ads and television commercials dominated the scene. Today, digital marketing reigns supreme, offering unprecedented opportunities for engagement and conversion. This transition hasn't just changed how we market but has also transformed the very essence of what marketing is.</p>
              <TitleSm title='The Digital Marketing Arsenal' />
              <p className='desc-p'>Search Engine Optimization (SEO): The cornerstone of digital marketing, SEO is the art of making your brand discoverable in the vast ocean of the internet. By optimizing website content and architecture, we ensure that your business ranks prominently on search engines, driving organic traffic and fostering brand credibility.</p>

              <p className='desc-p'>Content Marketing: In the digital age, content is king. High-quality, relevant content not only attracts and engages customers but also builds brand authority. From blog posts and whitepapers to videos and infographics, our content marketing strategies are tailored to resonate with your target audience and amplify your brand message.</p>

              <p className='desc-p'>Social Media Marketing: Social platforms are the new town squares, bustling with potential customers. Our social media strategies leverage the power of platforms like Facebook, Instagram, Twitter, and LinkedIn to create meaningful interactions, enhance brand loyalty, and drive conversions.</p>

              <p className='desc-p'>Email Marketing: Despite the rise of new digital channels, email remains a powerful tool for nurturing leads and retaining customers. Personalized, value-driven email campaigns ensure that your brand stays top-of-mind and fosters long-term relationships.</p>

              <p className='desc-p'>Pay-Per-Click (PPC) Advertising: For immediate visibility and results, PPC campaigns are indispensable. Our expertise in platforms like Google Ads and social media advertising ensures that your ad spend is optimized for maximum ROI, targeting the right audience with precision.</p>
              
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='The Art of Branding: Crafting Identities That Resonate' />

              <p className='desc-p'> At Evoshpere Marketing, we believe that branding goes beyond logos and taglines. It's about creating an identity that resonates with your audience on a profound level. Our branding process involves deep market research, competitive analysis, and creative brainstorming to develop a brand persona that is authentic, memorable, and impactful.</p>
              <TitleSm title='Key Elements of Successful Branding' />

              <p className='desc-p'>Consistency: A consistent brand experience across all touchpoints builds trust and recognition. From your website and social media profiles to customer service interactions, we ensure that your brand voice and visual identity are unwaveringly consistent.</p>

              <p className='desc-p'>Emotional Connection: Brands that evoke emotions create lasting impressions. We craft narratives and visual elements that connect with your audience on an emotional level, fostering loyalty and advocacy.</p>
              <TitleSm title='Case Studies: Our Success Stories' />
              <p className='desc-p'>Our track record speaks for itself. From transforming underperforming Shopify stores into e-commerce powerhouses to rebranding housing societies and elevating their market presence, our portfolio is a testament to our expertise and dedication.</p>
              <TitleSm title='Shopify Success: A Tale of Transformation' />
              
              <p className='desc-p'>One of our notable successes involved a struggling Shopify store that was grappling with low traffic and poor conversions. Through a comprehensive audit and targeted SEO strategy, we revamped their website, optimized their product listings, and implemented a robust content marketing plan. The result? A 300% increase in organic traffic and a significant boost in sales within six months.</p>
              <TitleSm title='Rebranding Housing Societies: Creating Community Identities' />
             
              <p className='desc-p'>Rebranding a housing society involves more than just a new logo; it's about creating a sense of community and belonging. We undertook a project with a prominent housing society, conducting extensive resident surveys and market research. Our rebranding strategy included a refreshed visual identity, a revamped website, and a series of community engagement events. The outcome was a renewed sense of pride among residents and an influx of new memberships.</p>
              <TitleSm title='The Future of Marketing: Innovation and Adaptation' />
              
              <p className='desc-p'>The marketing landscape is ever-evolving, with new technologies and trends emerging at a rapid pace. At Evoshpere Marketing, we stay ahead of the curve, continuously innovating and adapting our strategies to meet the changing needs of our clients and the market.</p>
              <TitleSm title='Embracing AI and Automation' />
              
              <p className='desc-p'>Artificial intelligence and automation are revolutionizing marketing, offering new ways to analyze data, personalize customer experiences, and optimize campaigns. We harness these technologies to provide data-driven insights and deliver hyper-targeted marketing efforts that drive results.</p>
              <TitleSm title='The Rise of Influencer Marketing' />
              
              <p className='desc-p'>Influencer marketing has emerged as a potent tool for reaching niche audiences and building brand credibility. We collaborate with influencers across various industries to create authentic endorsements that resonate with their followers and amplify your brand reach.</p>
              <TitleSm title='Conclusion' />
              
              <p className='desc-p'>In the dynamic world of marketing, success hinges on a blend of creativity, strategy, and continuous adaptation. At Evoshpere Marketing, we are committed to driving your brand's growth through innovative marketing solutions and compelling branding strategies. Whether you're launching a new product, rebranding your business, or seeking to dominate the digital landscape, we are your partners in success.</p>

              <p className='desc-p'>Join us on this journey and experience the transformative power of exceptional marketing. Contact Evoshpere Marketing today and let us elevate your brand to new heights.</p>
             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
