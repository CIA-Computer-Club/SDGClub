import Image from '@/components/Image'

interface Props {
    src: string
    title: string
    name: string
    quote: string
}

const ProfileCard: React.FC<Props> = ({src, title, name, quote}) => {
    return(
        <div className="flex py-10">
            <div className='flex flex-col'>
                <div className='text-4xl text-left'>
                    {title}
                    </div>
                    <div className="flex flex-row text-center">
                    <Image className=''
                            src={src}
                            width={530}
                            height={700}
                            alt={title}
                        >
                        </Image>
                        <div className="text-center ltr ps-8 text-4xl">{quote}</div>

                    </div>
                <div className="text-left text-2xl">{name}</div>
            </div>
        </div>

    )
}

export default ProfileCard