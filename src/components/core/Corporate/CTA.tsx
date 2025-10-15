import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/cta-section-with-gallery";
import { Button } from "@/components/ui/button" 

const IMAGES = [
  "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733680958774-39a0e8a64a54?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1548783307-f63adc3f200b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1703622377707-29bc9409aaf2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export const CTA = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 ">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2 border rounded-3xl shadow-lg bg-white dark:bg-neutral-900">
<ContainerStagger>
  <ContainerAnimated className="mb-4 block text-xs font-medium text-orange-600 md:text-sm">
    Learn & Lead
  </ContainerAnimated>
  <ContainerAnimated className="text-4xl font-semibold md:text-[2.4rem] tracking-tight">
    Elevate Your Team with Corporate Training
  </ContainerAnimated>
  <ContainerAnimated className="my-4 text-base text-slate-700 md:my-6 md:text-lg">
    Empower your employees with industry-leading skills and strategies. Our
    corporate training programs help teams enhance performance, improve
    collaboration, and drive sustainable growth in todays dynamic
    business environment.
  </ContainerAnimated>
  <ContainerAnimated>
    <Button className="bg-orange-600 text-white hover:bg-orange-700">
      Enroll Your Team Today
    </Button>
  </ContainerAnimated>
</ContainerStagger>


        <GalleryGrid>
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
                alt=""
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  )
}

