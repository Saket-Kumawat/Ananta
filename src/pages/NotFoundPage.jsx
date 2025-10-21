import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
 import { Button } from "../components/ui/button";
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center text-center py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Oops! Page Not Found.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              It seems the page you were looking for has moved or doesn't exist. Let's get you back on track.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;