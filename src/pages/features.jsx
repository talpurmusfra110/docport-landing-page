import { FaTools, FaChartBar, FaUsers } from 'react-icons/fa';

function Features() {
  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What should you expect?</h2>
        <p className="text-gray-600 mb-10">
          Docport hosts a variety of features that aim to make your life easier
          and provide a better overview of all of your logistics processes.
        </p>

        {/* Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-green-600 text-4xl mb-4 mx-auto">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desktop and App</h3>
            <p className="text-gray-600">
              Creating and tracking shipments has never been this easy. Everything can be done with a simple link share.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-green-600 text-4xl mb-4 mx-auto">
              <FaChartBar />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documents</h3>
            <p className="text-gray-900">
              At Docport, we generate documents like CMR for you and make them easily accessible whenever, wherever.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-green-600 text-4xl mb-4 mx-auto">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">
              Docport dashboard provides a comprehensive overview of all your processes by visualizing your data.
            </p>
          </div>
        </div>
      </div>

      <button
            type="button" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg mt-8"
          >
            Get Started
          </button>
    </div>
  );
}

export default Features;
