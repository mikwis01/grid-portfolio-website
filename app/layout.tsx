import '../styles/globals.scss'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html>
			<head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Hi, im Mikołaj - front end developer based in Poznań, Poland."
				/>
				<title>Mikołaj Wiśniewski | Front-end developer</title>
			</head>
			<body>{children}</body>
		</html>
	)
}
