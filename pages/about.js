import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero"
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
// import eyecatch from 'images/about.jpg'

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/eac0c9a6dbf6440aa8a45dee1af0503f/eb5bffdbc0504921afaccef1ee997b3e/about.jpg',
  height: 960,
  width: 1920,
  blurDataURL: 'data:image/jpeg;base64,',
}

export default function About() {
    return (
        <Container>
            <Meta pageTitle="アバウト"
             pageDesc="About development activities"
             pageImg={eyecatch.src}
             pageImgW={eyecatch.width}
             pageImgH={eyecatch.height}
             />
            <Hero title="About" subtitle="About development activities"/>
            <figure>
              <Image 
                src={eyecatch}
                alt=""
                layout="responsive"
                sizes="(min-width: 1152px) 1152px, 100vw"
                priority
                placeholder="blur"
                />
            </figure>
          <TwoColumn>
            <TwoColumnMain>

              <PostBody>
              <p>
               texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              </p>
              <h2>texttexttexttexttexttexttext</h2>
              <p>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              </p>
              <p>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              </p>
              <h3>texttexttexttexttexttexttexttexttexttexttexttexttext</h3>
              <p>
              texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextte
              ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              </p>
              <h2>FAQ</h2>
              <Accordion heading="texttexttexttexttexttexttexttext">
                <p>
                texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                exttexttexttexttexttexttexttexttext
                </p>
              </Accordion>
              <Accordion heading="texttexttexttexttexttexttexttexttexttexttext">
                <p>
                texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttextt
                exttexttexttexttexttext
                </p>
              </Accordion>
              <Accordion heading="texttexttexttexttexttexttexttexttexttext">
                <p>
                texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
                </p>
              </Accordion>
              </PostBody>
              </TwoColumnMain>
              <TwoColumnSidebar>
                <Contact />
              </TwoColumnSidebar>
          </TwoColumn>
        </Container>

    )
}