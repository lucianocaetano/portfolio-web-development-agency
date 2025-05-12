
const Banner = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] rounded-lg p-8 flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-center relative"
          style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/banner about.png")'}}
        >
          <div className="absolute bg-black/20 w-full h-full top-0 left-0 rounded-lg z-50"></div>
          <div className="absolute z-50">
            <div className="text-left mb-8">
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                We are
              </h1>
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              > Percy pocket solution </h1>
              <h2 className="text-white text-sm font-normal w-1/2 mt-6">
                We&apos;re a web development agency that provides a range of services including maintenance, documented APIs, React and Next.js frontends, and deployment offerings.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
