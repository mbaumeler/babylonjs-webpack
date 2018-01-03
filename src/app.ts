let canvas = document.getElementsByTagName('canvas')[0];

let engine = new BABYLON.Engine(canvas, true);
let scene = new BABYLON.Scene(engine);

let camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);

let light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

let box = BABYLON.Mesh.CreateBox('box', 2, scene);

let standardMaterial = new BABYLON.StandardMaterial('texture', scene);
standardMaterial.diffuseTexture = new BABYLON.Texture('src/logo.png', scene);

box.material = standardMaterial;
box.position.y = 1;
box.rotation.y = 0.7;

scene.registerBeforeRender(() => box.rotation.y += 0.02);

BABYLON.Mesh.CreateGround('ground', 6, 6, 2, scene);

engine.runRenderLoop(() => scene.render());