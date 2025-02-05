const User = require("../models/YoutuberDetails");


const AddYoutuber = async (req,res) =>{
    try {
        const {channelimage,channelname,category,language,country,subscriber,totalviews,totalvideos,
            creationat,bioname,tagname,latestvideo,latestvideodetail,shorts,membership,madeforkid,youtube,instagram,twiter,  
            facebook,linkdin,email,about,averagevideo,averageviews,averagelikes,averagecomments,averagevideolength} = req.body;
        
        const userModel = new User({channelimage,channelname,category,language,country,subscriber,totalviews,totalvideos,
            creationat,bioname,tagname,latestvideo,latestvideodetail,shorts,membership,madeforkid,youtube,instagram,twiter,  
            facebook,linkdin,email,about,averagevideo,averageviews,averagelikes,averagecomments,averagevideolength});
        
            
        // save method is used to insert data into collection
        await userModel.save();
        res.status(201)
            .json({ 
                message:"Youtuber Added Successfully", 
                success:true
            })

        
    } catch (error) {
        res.status(500)
            .json({ 
                message:"Internal Server Error", 
                success:false
            })
    }
}

const SearchYoutuber = async (req,res) =>{
    try {
        const {channelname,
            category,
            language,
            country,
            subscribersMin,
            subscribersMax,
            viewsMin,
            viewsMax,
            totalVideoMin,
            totalVideoMax,
            latestVideoMin,
            latestVideoMax,
            bioname,
            tagname,
            madeForKids,
            hasShorts,
            hasMembership,
            averageVideoMin,
            averageVideoMax,
            averageViewMin,
            averageViewMax,
            averageLikeMin,
            averageLikeMax,
            averageCommentMin,
            averageCommentMax,
            averageVideoLengthMin,
            averageVideoLengthMax} = req.body;


                    
        

            const youtuber = await User.find({
                ...(channelname && { channelname: channelname }),
                ...(category && { category: category }),
                ...(country && { country: country }),
                ...(language && { language: language }),
                ...(subscribersMin && subscribersMax && { 
                    subscriber: {
                        $gte: subscribersMin,
                        $lte: subscribersMax
                    }
                }),
                ...(viewsMin && viewsMax && { 
                    totalviews: {
                        $gte: viewsMin,
                        $lte: viewsMax
                    }
                }),
                ...(totalVideoMin && totalVideoMax && {
                    totalvideos: {
                        $gte: totalVideoMin,
                        $lte: totalVideoMax
                    }
                }),
                ...(latestVideoMin && latestVideoMax && {
                    latestvideo: {
                        $gte: latestVideoMin,
                        $lte: latestVideoMax
                    }
                }),
                ...(hasShorts && { shorts: hasShorts }),
                ...(hasMembership && { membership: hasMembership }),
                ...(madeForKids && { madeforkid: madeForKids }),
                ...(averageVideoMin && averageVideoMax && {
                    averagevideo: {
                        $gte: averageVideoMin,
                        $lte: averageVideoMax
                    }
                }),
                ...(averageViewMin && averageViewMax &&{
                    averageviews: {
                        $gte: averageViewMin,
                        $lte: averageViewMax
                    }
                }),
                ...(averageLikeMin && averageLikeMax && {
                    averagelikes: {
                        $gte: averageLikeMin,
                        $lte: averageLikeMax
                    }
                }),
                ...(averageCommentMin && averageCommentMax && {
                    averagecomments: {
                        $gte: averageCommentMin,
                        $lte: averageCommentMax
                    }
                }),
                ...(averageVideoLengthMin && averageVideoLengthMax && {
                    averagevideolength: {
                        $gte: averageVideoLengthMin,
                        $lte: averageVideoLengthMax
                    }
                })
            });
            
            console.log(youtuber);
            res.status(201).json({ 
                message: "Data Fetched Successfully", 
                success: true,
                result: youtuber
            });
            
            } catch (error) {
                res.status(500).json({ 
                    message: "Internal Server Error", 
                    success: false
                });
            }
        }
            
module.exports = {
    AddYoutuber,
    SearchYoutuber
}