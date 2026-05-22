const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'derspz0ir',
  api_key: '535148798378164',
  api_secret: 'kGpH0jrKy0KFicU6MfbzpSQS03A',
  secure: true,
});

async function run() {
  console.log('Searching Cloudinary folder with resource_type:image filter');
  try {
    const results = await cloudinary.search
      .expression('folder:l1a_album/* AND resource_type:image')
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute();
    console.log('Found', results.resources.length, 'images.');
    const nonImages = results.resources.filter(r => r.resource_type !== 'image');
    console.log('Non-images returned:', nonImages.length);
  } catch (err) {
    console.error('Error searching:', err);
  }
}
run();
