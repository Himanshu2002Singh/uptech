import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Loader, CheckCircle } from 'lucide-react';
import engineeringImage from '../../assets/trrrr.png'; // Update this path if needed

const services = [
  'Industrial Automation Solution',
  'Production Reporting',
  'Energy Monitoring & Energy Saving Solutions',
  'Quality Inspection Software Solutions',
  'Overall Equipment Efficiency',
  'Web & Cloud Based Applications',
  'Pneumatic & Hydraulic Solutions',
  'Predictive & Preventive Maintenance Software',
  'AI & ML Based Solution',
  'Other Customised Solutions'
];

const FreeEngineeringConsultancy = () => {
  const [selectedService, setSelectedService] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [typedText, setTypedText] = useState('');
  const fullText = 'Get expert help on engineering solutions tailored to your problem.';
  const typingIndex = useRef(0);
  const isDeleting = useRef(false);

  // Typewriter Loop
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!isDeleting.current) {
        setTypedText(fullText.substring(0, typingIndex.current + 1));
        typingIndex.current++;
        if (typingIndex.current >= fullText.length) {
          isDeleting.current = true;
          setTimeout(() => {
            typingIndex.current = 0;
            isDeleting.current = false;
          }, 2500); // wait before restarting
        }
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [typedText]);

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAiResponse(`✅ AI Response generated for: ${selectedService}\n📝 Problem: ${problemStatement}`);
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative px-6 lg:px-20">
      {/* Floating BG Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-lg p-8">
        {/* Left: Text + Form */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-4"
          >
            Engineering Consultancy Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-red-600 text-lg font-light mb-8 h-[30px]"
          >
            {typedText}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div>
              <label className="block mb-1 font-medium">Email <span className="text-red-400">*</span></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-red/20 text-black placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Contact No.</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-red/20 text-black placeholder-gray-400"
                placeholder="Enter contact number"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-black mb-2 font-medium">Select Service <span className="text-red-400">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <label key={service} className="flex items-center text-black bg-white/5 px-4 py-2 rounded-lg border border-red/20 hover:bg-white/10 cursor-pointer transition-all">
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    checked={selectedService === service}
                    onChange={() => setSelectedService(service)}
                    className="mr-3"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-black mb-2 font-medium">Problem Statement</label>
            <textarea
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-red/20 text-black placeholder-gray-400"
              placeholder="Describe your engineering problem"
            />
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              disabled={isLoading || !email || !selectedService}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold hover:from-red-700 hover:to-orange-800 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex justify-center items-center space-x-2">
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Generating...</span>
                </div>
              ) : (
                <div className="flex justify-center items-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <span>Submit</span>
                </div>
              )}
            </button>
          </div>

          {aiResponse && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 p-6 bg-white/10 text-black rounded-xl border border-white/20"
            >
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="text-green-400" />
                <h2 className="text-lg font-semibold">AI Analysis</h2>
              </div>
              <pre className="whitespace-pre-wrap text-gray-300">{aiResponse}</pre>
            </motion.div>
          )}
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="hidden lg:block"
        >
          <img
            src={engineeringImage}
            alt="Engineering consultancy"
            className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border border-red-600"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FreeEngineeringConsultancy;
