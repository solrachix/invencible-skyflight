import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

assert.match(html, /const pressedKeys = new Set\(\);/);
assert.match(html, /function updateFlightControls\(delta\)/);
assert.match(html, /function updateHeroFrame\(\)/);
assert.match(html, /function updateCameraBasis\(\)/);
assert.match(html, /function updateHeroHeadPose\(\)/);
assert.match(html, /function updateChaseCamera\(snapToTarget = false\)/);
assert.match(html, /keydown/);
assert.match(html, /keyup/);
assert.match(html, /KeyW/);
assert.match(html, /KeyA/);
assert.match(html, /KeyS/);
assert.match(html, /KeyD/);
assert.match(html, /Space/);
assert.match(html, /ShiftLeft/);
assert.match(html, /function updateFlightTrail\(\)/);
assert.match(html, /<title>Invencível voando sobre Tokyo 🌍<\/title>/);
assert.match(html, /id="start-overlay"/);
assert.match(html, /id="fps-readout"/);
assert.match(html, /id="hour"[\s\S]*?value="0"/);
assert.match(html, /const INTRO_START_HEIGHT = 180000;/);
assert.match(html, /const INTRO_TARGET_HEIGHT = 1000;/);
assert.match(html, /const INTRO_CAMERA_START_DISTANCE = 50;/);
assert.match(html, /const INTRO_CAMERA_END_DISTANCE = 170;/);
assert.match(html, /const INTRO_CAMERA_START_HEIGHT = 68;/);
assert.match(html, /const INTRO_CAMERA_END_HEIGHT = 62;/);
assert.match(html, /const MOUSE_CAMERA_SENSITIVITY = 0\.0028;/);
assert.match(html, /const CAMERA_MOUSE_PITCH_MIN = -0\.32;/);
assert.match(html, /const CAMERA_MOUSE_PITCH_MAX = 0\.24;/);
assert.match(html, /const introState = \{/);
assert.match(html, /function startIntroFlight\(\)/);
assert.match(
  html,
  /function startIntroFlight\(\)[\s\S]*?updateHeroFrame\(\);[\s\S]*?updateChaseCamera\(true\);/,
);
assert.match(html, /function updateIntroFlight\(delta\)/);
assert.match(html, /function updateFpsReadout\(time\)/);
assert.match(
  html,
  /startOverlay\.addEventListener\("click", startIntroFlight\);/,
);
assert.match(html, /if \(!introState\.controlsEnabled\) return;/);
assert.doesNotMatch(html, /Ele comeca fora da Terra/);
assert.match(html, /const BIRD_MODEL_CANDIDATES = \[/);
assert.match(html, /\.\/assets\/models\/fly-hero\.glb/);
assert.match(html, /\.\/assets\/models\/Flamingo\.glb/);
assert.match(html, /\.\/assets\/models\/Stork\.glb/);
assert.match(html, /\.\/assets\/models\/Parrot\.glb/);
assert.match(html, /const HERO_TOKYO_LAT = 35\.6812;/);
assert.match(html, /const HERO_TOKYO_LON = 139\.8;/);
assert.match(html, /const HERO_TOKYO_HEIGHT = 2500;/);
assert.match(html, /const HERO_TOKYO_GROUND_HEIGHT = 40;/);
assert.match(html, /function loadBirdModels\(\)/);
assert.match(html, /function spawnBird\(\)/);
assert.match(html, /function updateBirds\(delta\)/);
assert.match(html, /birdRoot/);
assert.match(html, /birdSpawnAt/);
assert.match(html, /birdModels/);
assert.match(
  html,
  /const windAudio = new Audio\("\.\/assets\/audio\/vento\.wav"\);/,
);
assert.match(html, /windAudio\.loop = true;/);
assert.match(html, /function startWindAudio\(\)/);
assert.match(html, /function handlePointerMove\(event\)/);
assert.match(html, /pointermove/);
assert.match(html, /cameraOrbit/);
assert.match(html, /cameraStableUp/);
assert.match(html, /camera\.up\.copy\(cameraStableUp\);/);
assert.match(html, /cameraStableForward\.projectOnPlane\(cameraStableUp\)/);
assert.doesNotMatch(html, /function handlePointerDown\(event\)/);
assert.match(html, /const DOUBLE_TAP_WINDOW_MS = 280;/);
assert.match(html, /const SUPERSONIC_SPEED = 2400;/);
assert.match(html, /const SUPERSONIC_CLIMB_SPEED = 2800;/);
assert.match(html, /const SUPERSONIC_LOCK_ALTITUDE = 8000;/);
assert.match(html, /const SUPERSONIC_SPEED_RAMP_PER_SECOND = 800;/);
assert.match(html, /const SUPERSONIC_SPEED_RAMP_MAX = 70000;/);
assert.match(html, /const FLIGHT_MIN_AGL = 100;/);
assert.match(
  html,
  /const FLIGHT_MIN_HEIGHT = HERO_TOKYO_GROUND_HEIGHT \+ FLIGHT_MIN_AGL;/,
);
assert.match(html, /function getFlightAgl\(\)/);
assert.match(html, /const FLIGHT_MAX_HEIGHT = 250000;/);
assert.match(html, /function triggerBoost\(code\)/);
assert.match(html, /boostUntil/);
assert.match(html, /climbBoostUntil/);
assert.match(html, /boostStartedAt/);
assert.match(html, /climbBoostStartedAt/);
assert.match(
  html,
  /if \(flight\.height >= SUPERSONIC_LOCK_ALTITUDE\) \{[\s\S]*?flight\.boostUntil = Infinity;[\s\S]*?flight\.climbBoostUntil = Infinity;[\s\S]*?\}/,
);
assert.match(
  html,
  /const boostAgeSeconds =[\s\S]*?boostStartedAt > 0 \? \(now - boostStartedAt\) \/ 1000 : 0;/,
);
assert.match(html, /const supersonicSpeedBonus =[\s\S]*?boostActive/);
assert.match(html, /boostAgeSeconds \* SUPERSONIC_SPEED_RAMP_PER_SECOND/);
assert.match(html, /SUPERSONIC_SPEED_RAMP_MAX/);
assert.match(html, /const maxForwardSpeed =/);
assert.match(html, /SUPERSONIC_SPEED \+ supersonicSpeedBonus/);
assert.match(
  html,
  /const altitudeCameraScale = introState\.controlsEnabled[\s\S]*?Math\.min\(Math\.max\(0, flight\.height - 2000\) \* 0\.0006, 30\)[\s\S]*?: 0;/,
);
assert.match(html, /function addHeroLighting\(\)/);
assert.match(
  html,
  /introHeroLight = new THREE\.PointLight\(0xffffff, 2\.0, 1200, 2\);/,
);
assert.match(html, /camera\.add\(introHeroLight\);/);
assert.match(
  html,
  /introHeroLight\.intensity = introState\.controlsEnabled \? 0\.3 : 2\.0;/,
);
assert.match(html, /function brightenHeroModel\(model\)/);
assert.match(html, /const HERO_SCALE = 18;/);
assert.match(html, /const HERO_SATURATION_BOOST = 0\.18;/);
assert.match(html, /new THREE\.PointLight\(0xffffff, 4, 9000\)/);
assert.match(html, /emissiveIntensity/);
assert.match(html, /const HERO_YAW_OFFSET = Math\.PI;/);
assert.match(html, /heroModel\.rotation\.y = HERO_YAW_OFFSET;/);
assert.match(html, /Head_06/);
assert.match(html, /NEck_05/);
assert.match(html, /placeHeroAboveTokyo/);
assert.match(html, /position camera above Tokyo/);
assert.match(
  html,
  /const params = \{ hourUTC: 0 \}; \/\/ 0:00 UTC = 9:00 AM Tokyo/,
);
assert.match(
  html,
  /const headPitchTarget = THREE\.MathUtils\.clamp\([\s\S]*?Math\.max\(-flight\.pitch,[\s\S]*?Math\.max\(flight\.pitch,[\s\S]*?\);/,
);
assert.match(
  html,
  /const headYawTarget = THREE\.MathUtils\.clamp\([\s\S]*?flight\.roll,[\s\S]*?-0\.28,[\s\S]*?0\.28,[\s\S]*?\);/,
);
assert.match(html, /const CAMERA_FOLLOW_DISTANCE = 160;/);
assert.match(html, /const CAMERA_FOLLOW_HEIGHT = 60;/);
assert.match(html, /const CAMERA_LOOK_AHEAD = 155;/);
assert.match(html, /const INTRO_CAMERA_LOOK_AHEAD = 35;/);
assert.match(
  html,
  /const speedRatio = THREE\.MathUtils\.clamp\([\s\S]*?Math\.abs\(flight\.speed\) \/ SUPERSONIC_SPEED,[\s\S]*?0,[\s\S]*?1,[\s\S]*?\);/,
);
assert.match(html, /const baseCruisePitch = -0\.05 - speedRatio \* 0\.18;/);
assert.match(html, /const boostPitch = -0\.08 - speedRatio \* 0\.34;/);
assert.match(
  html,
  /const normalFollowDistance = THREE\.MathUtils\.lerp\([\s\S]*?CAMERA_FOLLOW_DISTANCE,[\s\S]*?450,[\s\S]*?speedRatio,[\s\S]*?\);/,
);
assert.match(
  html,
  /const normalFollowHeight = THREE\.MathUtils\.lerp\([\s\S]*?CAMERA_FOLLOW_HEIGHT,[\s\S]*?150,[\s\S]*?speedRatio,[\s\S]*?\);/,
);
assert.match(
  html,
  /const followDistance = introState\.controlsEnabled[\s\S]*?INTRO_CAMERA_START_DISTANCE,[\s\S]*?INTRO_CAMERA_END_DISTANCE,[\s\S]*?introCameraProgress,[\s\S]*?\);/,
);
assert.match(
  html,
  /const followHeight = introState\.controlsEnabled[\s\S]*?INTRO_CAMERA_START_HEIGHT,[\s\S]*?INTRO_CAMERA_END_HEIGHT,[\s\S]*?introCameraProgress,[\s\S]*?\);/,
);
assert.match(
  html,
  /const lookAheadDistance = introState\.controlsEnabled\s*\?\s*CAMERA_LOOK_AHEAD\s*:\s*INTRO_CAMERA_LOOK_AHEAD;/,
);
assert.match(
  html,
  /cameraLookTarget[\s\S]*?addScaledVector\(cameraStableForward,\s*lookAheadDistance\)/,
);
assert.match(
  html,
  /if \(snapToTarget\) \{[\s\S]*?camera\.position\.copy\(cameraTargetPosition\);[\s\S]*?\} else \{[\s\S]*?camera\.position\.lerp\(cameraTargetPosition, 0\.09\);[\s\S]*?\}/,
);
