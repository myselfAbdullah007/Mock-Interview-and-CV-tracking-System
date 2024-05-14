const express = require('express');
const router = express.Router();
const userModel = require('../../Models/User_Model'); 

router.delete('/deleteUser', async (req, res) => {
    console.log("inside -->>  fvfdvdf  <<--");

    try {
        console.log("inside -->>  delete user  <<--");
        const userId = req.body._id;
        console.log(userId);
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});

module.exports = router;
