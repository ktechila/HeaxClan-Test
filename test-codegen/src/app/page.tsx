import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400">Test Codegen</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A modern Next.js application built with TypeScript, Tailwind CSS, and Turbopack for lightning-fast development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary">
              Get Started
            </Button>
            <Button variant="secondary">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fast Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with Turbopack for incredibly fast hot reloading and development experience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Beautiful Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Styled with Tailwind CSS for rapid UI development and consistent design.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Type Safe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with TypeScript for better developer experience and fewer runtime errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
