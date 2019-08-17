import * as faker from "faker"

export const company = {
   id: faker.random.uuid(),
   companyName: faker.company.companyName(),
   addressId: faker.random.uuid(),
   membershipId: faker.random.uuid(),
   ownerId: faker.random.uuid(),
   profileImageUrl: faker.image.food(),
   email: faker.internet.email(),
   webisteUrl: faker.internet.url(),
   phone: faker.phone.phoneNumber(),
}
export const membership = {
   id: faker.random.uuid(),
   isMember: faker.random.boolean(),
}
export const address = {
   id: faker.random.uuid(),
   streetAddress: faker.address.streetAddress(),
   streetSecondaryAddress: faker.address.secondaryAddress(),
   country: faker.address.country(),
   city: faker.address.city(),
   zipCode: faker.address.zipCode(),
   state: faker.address.state(),
}
export const contact = {
   id: faker.random.uuid(),
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
   jobTitle: faker.name.jobTitle(),
   phone: faker.phone.phoneNumber(),
   email: faker.internet.email(),
   isOwner: faker.random.boolean(),
}