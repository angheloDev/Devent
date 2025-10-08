const ContactSection = () => {
	return (
		<section className='py-12 md:py-20 bg-[#2b2340] mt-8 rounded-t-lg font-gothicA1'>
			<div className='max-w-4xl mx-auto text-center px-4'>
				<h3 className='text-4xl font-extrabold mb-4'>Get In Touch</h3>
				<p className='text-gray-300 mb-6'>
					Have questions, suggestions, or just want to say hello? We’d love to
					hear from you!
				</p>

				<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
					<button className='px-6 py-2 rounded-full bg-gradient-to-r from-[#7B6EFF] to-[#6B5BFF]'>
						Email Us
					</button>
					<button className='px-6 py-2 rounded-full bg-gradient-to-r from-[#7B6EFF] to-[#6B5BFF]'>
						Live Chat
					</button>
					<button className='px-6 py-2 rounded-full bg-gradient-to-r from-[#7B6EFF] to-[#6B5BFF]'>
						FAQ
					</button>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
