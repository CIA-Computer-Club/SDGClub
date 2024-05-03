interface Props {
  description: string
}

const CircleButton: React.FC<Props> = ({description}) => {
  return (
    <button className="inline-flex h-40 w-40 items-center justify-center rounded-full bg-white text-4xl text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300">
      {description}
    </button>
  )

}


export default CircleButton