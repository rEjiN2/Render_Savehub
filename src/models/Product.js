import mongoose from 'mongoose';
const { Schema } = mongoose;


const ProductSchema = new Schema({
    name: String,
    category: String,
    subcategory: String,
    price: Number,
    discount: Number,
    link: String,
    image: String
},

{timestamps:true}
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);