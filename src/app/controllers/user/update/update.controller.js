class UpdateUserController {
    constructor(userService) {
        this.userService = userService
    }
    async execute(req, resp) {
        const { body } = req
        const user = await this.userService.updateOrCreate(body, req.params.id)
        return resp.status(200).send({message: `ID ${req.params.id} atualizado`})
    }
}
export { UpdateUserController }