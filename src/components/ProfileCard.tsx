import Image from '@/components/Image'

interface Props {
    src: string
    title: string
    name: string
    quote: string
}

const ProfileCard: React.FC<Props> = ({src, title, name, quote}) => {
    return(
        <div className='flex'>
            <Image className=''
                src={src}
                width={200}
                height={400}
                alt={title}
            >
            </Image>
            <div className='text-4xl font'>
                {title}
            </div>
        </div>

    )
}

export default ProfileCard