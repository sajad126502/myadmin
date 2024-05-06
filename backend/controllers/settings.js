let settings = {};
try {
  settings = require('../settings.json');
} catch (error) {
  console.error('Error loading settings:', error);
}
const settingsController=(req, res) => {
    res.json(settings);
  }
const changeSettingsController=(req, res) => {
    const newSettings = req.body;
    settings = { ...settings, ...newSettings };
  
    // Save settings to file
    fs.writeFile('./settings.json', JSON.stringify(settings), (err) => {
      if (err) {
        console.error('Error saving settings:', err);
        res.status(500).send('Error saving settings');
      } else {
        res.send('Settings saved successfully');
      }
    });
  }
module.exports={settingsController,changeSettingsController}