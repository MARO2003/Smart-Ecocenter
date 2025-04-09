import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Connexion à Smart-Ecocenter</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
            <input type="email" id="email" name="email" placeholder="tonemail@exemple.com"
              className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="********"
              className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>

          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            Se connecter
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Mot de passe oublié ?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
