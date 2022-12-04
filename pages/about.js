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
  src: 'https://images.microcms-assets.io/assets/eac0c9a6dbf6440aa8a45dee1af0503f/08f8bbdd48f24588931a66ffbe8653de/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3.jpg',
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
               texttexttexttexttexttexttexttexttexttexttexttext
              </p>
              <h2>texttexttexttexttexttexttext</h2>
              <p>
              texttexttexttexttexttexttexttexttextt
              <p>
              texttexttexttexttexttexttexttexttextt
              <h3>texttexttexttexttexttexttexttexttext</h3>
              <p>
              texttexttexttexttexttexttexttexttextte
              ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
              </p>
              <h2>FAQ</h2>
              <Accordion heading="texttexttexttexttexttexttexttext">
                <p>
                texttexttexttexttexttexttexttexttexttexttext
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