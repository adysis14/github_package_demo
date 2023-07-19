const fs = require('fs');

const packageJsonPath = './package.json';

// Read the current version from package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

//  default to 'patch'
const versionBump = 'patch';

// Function to increment the version number based on the bump type
function incrementVersion(version, bump) {
  const [major, minor, patch] = version.split('.').map(Number);

  switch (bump) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

const newVersion = incrementVersion(currentVersion, versionBump);

// Update the version number in package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Updated version from ${currentVersion} to ${newVersion}`);
