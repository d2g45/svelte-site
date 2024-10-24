<script>
	import { Canvas, T } from '@threlte/core';
	import { Suspense } from '@threlte/extras';
	const position = [10, 10, 10];
</script>

<Canvas>
	<T.PerspectiveCamera
		makeDefault
		{position}
		on:create={({ ref }) => {
			ref.lookAt(0, 1, 0);
		}}
	/>
	<Suspense>
		<T.Mesh position.y={1}>
			<T.BoxGeometry args={[1, 2, 1]} />
			<T.MeshBasicMaterial color="hotpink" />
		</T.Mesh>
	</Suspense>
</Canvas>
