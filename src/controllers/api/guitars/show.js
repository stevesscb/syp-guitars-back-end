import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiGuitarShow = async (req, res) => {
  // you do not have category. so you cannot use category: true

  try {
    const { params: { id } } = req
    const foundGuitar = await prisma.Guitar.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        images: true
      }
    })
    return res.status(200).json(foundGuitar)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiGuitarShow
