import { response } from "../helpers/Response.js";

let data = [
    {
        _id: "1",
        name: "Luisa",
        lastname: "Morales",
        age: 18,
        studies:[
            {
                name: "Tecnología en ADSO",
                university: "SENA"
            },
            {
                name:"Técnica en programación",
                university:"UPB"
            }
        ],
        favoriteLanguages:["Javascript", "Java", "C++"],
    },
]

const userCtrl = {};

userCtrl.getData = (req, reply) => {

    try {

        reply.code(200).send({
            ok:true,
            data,
            message: "Lista de usuarios"
        })
        
    } catch (error) {
        
        reply.code(500).send({
            ok:false,
            data: "",
            message: error.message,
        })
    }   
};

userCtrl.getDataById = (req, reply) => {
    try {
        const {id} = req.params;
        // const {search} = req.query;

        const usuario = data.find((item) => item._id === id);

        if (!usuario) {
            return response(reply, 404, false, "", "El usuario no existe.")
        }

        reply.send({
            ok: true,
            data: usuario,
            message: "El usuario ha sido encontrado con éxito."
            // query: search,
        })
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
}

userCtrl.saveData = (req, reply) => {

    try {
        data.push(req.body)

        response(reply, 201, true, req.body, "El usuario se ha creado con éxito.")
        
    } catch (error) {
        reply.code(500).send({
            ok:false,
            data: "",
            message: error.message,
        })
    }
};

export default userCtrl;
