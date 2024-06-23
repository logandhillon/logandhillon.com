"use client"

import Header from "@/components/header";

export default function Home() {
	return <main>
		<Header />

		<section className="container mx-auto p-5 text-center mt-32 mb-72">
			<h1 className="text-4xl font-semibold">404 Not Found</h1>
			<p>The content you're looking for could not be found.</p>
			<p className="mb-4">Sorry about that.</p>
			<a href="/" className="text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-md">Go Home</a>
			<a href="#" onClick={() => window.history.back()} className="ml-2 text-gray-700 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md">Go Back</a>
		</section>

	</main>;
}
