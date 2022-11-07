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
			</head>
			<body>{children}</body>
		</html>
	)
}
