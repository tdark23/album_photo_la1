const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'derspz0ir',
  api_key: '535148798378164',
  api_secret: 'kGpH0jrKy0KFicU6MfbzpSQS03A',
  secure: true,
});

async function run() {
  try {
    const results = await cloudinary.search
      .expression('folder:l1a_album/*')
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute();
    console.log('Total resources:', results.resources.length);
    for (let r of results.resources) {
      // Construct url like in generateBlurPlaceholder
      const url = `https://res.cloudinary.com/derspz0ir/image/upload/f_jpg,w_8,q_70/${r.public_id}.${r.format}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.log(`❌ Failed to fetch (Status ${res.status}): ${url}`);
        } else {
          // Success
        }
      } catch (err) {
        console.log(`💥 CRASH fetching: ${url}`);
        console.error(err.message);
      }
    }
    console.log('Verification done.');
  } catch (err) {
    console.error('Error:', err);
  }
}
run();
