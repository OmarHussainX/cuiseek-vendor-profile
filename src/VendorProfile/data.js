import * as faker from "faker"

export const company = {
   id: faker.random.uuid(),
   name: faker.company.companyName(),
   addressId: faker.random.uuid(),
   membershipId: faker.random.uuid(),
   ownerId: faker.random.uuid(),
   profileImageUrl: faker.image.food(),
   email: faker.internet.email(),
   websiteUrl: faker.internet.url(),
   phone: faker.phone.phoneNumber(),
}

export const bookings = {
  count: faker.random.number(),
  timeSaved: faker.random.number({'min': 1000, 'max': 5000}),
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
   lat: faker.address.latitude(),   // The latitude and longitude values generated
   lng: faker.address.longitude(),  // are not useful: they aren't real/valid
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