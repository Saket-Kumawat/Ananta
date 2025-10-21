import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/ui/button';
import { toast } from '../components/ui/use-toast';
import { Briefcase, Code, PenTool, Users } from 'lucide-react';
 const jobOpenings = [
  {
    title: 'React Developer',
    location: 'Jaipur (Remote Friendly)',
    type: 'Full-time',
    icon: Code,
  },
  {
    title: 'UI/UX Designer',
    location: 'Jaipur',
    type: 'Full-time',
    icon: PenTool,
  },
  {
    title: 'Project Manager',
    location: 'Jaipur',
    type: 'Part-time',
    icon: Briefcase,
  },
];

const CareersPage = () => {
  const handleApply = (title) => {
    toast({
      title: `Applying for ${title}`,
      description: "Please send your resume to team@anantastudio.space. We look forward to hearing from you!",
    });
  };

  return (
    <>
      <Helmet>
        <title>Careers - Ananta Studio</title>
        <meta name="description" content="Join the Ananta Studio team and help us build amazing digital experiences for businesses in Jaipur and beyond." />
      </Helmet>
      <div className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're looking for passionate individuals to help us create the future of digital experiences.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Current Openings
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-slate-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      <job.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                        <span>{job.location}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => handleApply(job.title)} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shrink-0">
                    Apply Now
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-slate-600">Don't see a role that fits? We're always looking for talent.</p>
              <a href="mailto:team@anantastudio.space" className="text-blue-600 font-semibold hover:underline">Send us your resume!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;