const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="m-12 mt-auto lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">
            Contact me here to join your team
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Fill in the form to contact me and talk about a potential project to work on, or
            for me to join your team!
          </p>
        </div>
        <form
          action="https://getform.io/f/aejjvjvb"
          method="POST"
          className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="text-field"/>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="email@example.com"
                className="text-field"/>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80"></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact