import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            SimpleTodo
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-2xl mx-auto mb-8">
            Beautiful task management with the simplicity you expect
          </p>

          <div className="relative w-full max-w-md mx-auto h-[500px] md:h-[600px]">
            {/* Replace with your actual app screenshot/mockup */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-[38px] shadow-xl overflow-hidden flex items-center justify-center">
              <p className="text-medium-gray">App Screenshot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Designed for simplicity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card p-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 flex items-center justify-center mb-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Effortless Tasks</h3>
              <p className="text-medium-gray">
                Create and complete tasks with a simple, intuitive interface
                designed for everyday use.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card p-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 flex items-center justify-center mb-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Smart Planning</h3>
              <p className="text-medium-gray">
                Organize your day with intelligent reminders and beautifully
                designed calendars.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card p-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 flex items-center justify-center mb-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Privacy First</h3>
              <p className="text-medium-gray">
                Your data stays on your device. We prioritize your privacy with
                secure, local storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Coming soon to the App Store
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto mb-10">
            Join the waitlist to be notified when SimpleTodo launches
          </p>

          <button className="apple-button">Join Waitlist</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-medium-gray">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SimpleTodo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
