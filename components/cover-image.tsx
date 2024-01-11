import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string,
  width: any, 
  height: any
}

export default function CoverImage({ title, coverImage, slug, width, height }: Props) {
  const image = (
    <Image
      width={width || 325}
      height={height || 237}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      
    />
  )
  return (
  
    < >
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  )
}
