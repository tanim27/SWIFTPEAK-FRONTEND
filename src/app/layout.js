import Footer from '@/components/shared/Footer/Footer'
import Navbar from '@/components/shared/Navbar/Navbar'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
