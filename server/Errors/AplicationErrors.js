class AplicationErrors extends Error
{
    constructor(status, message)
    {   
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message)
    {
        return new AplicationErrors(404, message)
    }
}

module.exports = AplicationErrors