import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        {/* Logo & Title */}
        <h1 className="text-3xl font-bold text-green-600 text-center mb-2">Docport</h1>
        <h2 className="text-xl font-semibold text-center text-gray-700">Sign up</h2>
        <p className="text-center text-gray-500 mb-6">Create an account</p>

        {/* Signup Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" placeholder="Your company name"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="email@example.com"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" placeholder="+92 300 0000000"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Registration No</label>
            <input type="text" placeholder="e.g. 123456"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Create a password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Private Person</label>
            <select className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" placeholder="City name"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input type="text" placeholder="e.g. 70000"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Company Address</label>
            <input type="text" placeholder="Complete address"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600" />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
