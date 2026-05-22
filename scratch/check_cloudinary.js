const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'derspz0ir',
  api_key: '535148798378164',
  api_secret: 'kGpH0jrKy0KFicU6MfbzpSQS03A',
  secure: true,
});

async function run() {
  console.log('Searching Cloudinary folder: l1a_album');
  try {
    const results = await cloudinary.search
      .expression('folder:l1a_album/*')
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute();
    console.log('Found', results.resources.length, 'resources:');
    for (let r of results.resources) {
      console.log(`- public_id: ${r.public_id}, format: ${r.format}, width: ${r.width}, height: ${r.height}`);
    }
  } catch (err) {
    console.error('Error searching:', err);
  }
}
run();
