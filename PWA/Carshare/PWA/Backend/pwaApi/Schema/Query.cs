using System;
using Bogus;
using pwaApi.Types;

namespace pwaApi.Schema
{
    public class Query
    {
        // private readonly Faker<UserType> _userFaker;
        // private readonly Faker<TripType> _tripFaker;
        // private readonly Faker<ReservationType> _reservationFaker;
        // private readonly Faker<TransactionType> _transactionFaker;
        // private readonly Faker<CarType> _carFaker;

        private readonly UserType Kara = new UserType()
        {
            Id = 1,
            Name = "Kara van Oranje",
            Colour = "#E42C64",
            FirebaseId = "10"
        };

        private readonly UserType Bob = new UserType()
        {
            Id = 2,
            Name = "Bob van Oranje",
            Colour = "#4D909E",
            FirebaseId = "11"
        };

        private readonly UserType Wim = new UserType()
        {
            Id = 3,
            Name = "Cino Peeters",
            Colour = "#D970DB",
            FirebaseId = "12"
        };

        public Query()
        {
            // _userFaker = new Faker<UserType>()
            //     .RuleFor(c => c.Id, f => Guid.NewGuid())
            //     .RuleFor(c => c.Name, f => f.Name.FullName())
            //     .RuleFor(c => c.Colour, f => f.Commerce.Color())
            //     .RuleFor(c => c.FirebaseId, f => f.Finance.Account(10));

            // _tripFaker = new Faker<TripType>()
            //     .RuleFor(c => c.Id, f => Guid.NewGuid())
            //     .RuleFor(c => c.User, f => _userFaker.Generate())
            //     .RuleFor(c => c.Date, f => f.Date.Recent())
            //     .RuleFor(c => c.Distance, f => f.Random.Int(3, 350));

            // _reservationFaker = new Faker<ReservationType>()
            //     .RuleFor(c => c.Id, f => Guid.NewGuid())
            //     .RuleFor(c => c.User, f => _userFaker.Generate())
            //     .RuleFor(c => c.StartDate, f => f.Date.Recent())
            //     .RuleFor(c => c.EndDate, f => f.Date.Recent());

            // _transactionFaker = new Faker<TransactionType>()
            //     .RuleFor(c => c.Id, f => Guid.NewGuid())
            //     .RuleFor(c => c.User, f => _userFaker.Generate())
            //     .RuleFor(c => c.Liters, f => f.Random.Int(20, 65))
            //     .RuleFor(c => c.Date, f => f.Date.Recent())
            //     .RuleFor(c => c.Amount, f => f.Random.Double(30, 100));

            // _carFaker = new Faker<CarType>()
            //     .RuleFor(c => c.Id, f => Guid.NewGuid())
            //     .RuleFor(c => c.Name, f => f.Vehicle.Model())
            //     .RuleFor(c => c.Colour, f => f.Commerce.Color())
            //     .RuleFor(c => c.Type, f => f.Vehicle.Type())
            //     .RuleFor(c => c.MaxRange, f => f.Random.Int(250, 750))
            //     .RuleFor(c => c.Tank, f => f.Random.Int(40, 70))
            //     .RuleFor(c => c.Trips, f => _tripFaker.Generate(3))
            //     .RuleFor(c => c.Transactions, f => _transactionFaker.Generate(4))
            //     .RuleFor(c => c.Reservations, f => _reservationFaker.Generate(3))
            //     .RuleFor(c => c.Owner, f => _userFaker.Generate())
            //     .RuleFor(c => c.Users, f => _userFaker.Generate(3));
        }
        public UserType GetUser()
        {
            return Kara;
        }

        //public IEnumerable<CarType> GetCars(int limit)
        //{
        //    return _carFaker.Generate(limit);
        //}

        public IEnumerable<CarType> GetCars()
        {
            return new List<CarType>{
                new CarType{
                    Id = 1,
                    Name = "Cooper S",
                    Colour = "Orange",
                    Type = "minicooperside",
                    Odometer = 2090,
                    Reserved = false,
                    MaxRange = 668,
                    Tank = 49,
                    Trips = new List<TripType>{
                        new TripType{
                            Id = 1,
                            User = Kara,
                            Date = DateTime.Parse("May 22, 2022, 11:00:00"),
                            Distance = 22
                        },
                        new TripType{
                            Id = 2,
                            User = Bob,
                            Date = DateTime.Parse("May 22, 2022, 14:30:00"),
                            Distance = 80
                        },
                        new TripType{
                            Id = 3,
                            User = Kara,
                            Date = DateTime.Parse("May 23, 2022, 17:00:00"),
                            Distance = 22
                        },
                        new TripType{
                            Id = 4,
                            User = Wim,
                            Date = DateTime.Parse("May 24, 2022, 09:25:00"),
                            Distance = 134
                        },
                    },
                    Transactions = new List<TransactionType>{
                        new TransactionType{
                            Id = 1,
                            User = Kara,
                            Date = DateTime.Parse("May 12, 2022, 11:00:00"),
                            Liters = 10,
                            Amount = 21.79
                        },
                        new TransactionType{
                            Id = 2,
                            User = Bob,
                            Date = DateTime.Parse("May 14, 2022, 11:00:00"),
                            Liters = 3,
                            Amount = 6.54
                        },
                        new TransactionType{
                            Id = 3,
                            User = Kara,
                            Date = DateTime.Parse("May 15, 2022, 11:00:00"),
                            Liters = 22,
                            Amount = 47.94
                        },
                        new TransactionType{
                            Id = 4,
                            User = Wim,
                            Date = DateTime.Parse("May 20, 2022, 11:00:00"),
                            Liters = 42,
                            Amount = 91.51
                        },
                    },
                    Reservations = new List<ReservationType>{
                        new ReservationType{
                            Id = 1,
                            User = Kara,
                            StartDate = DateTime.Parse("May 25, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 25, 2022, 12:00:00")
                        },
                        new ReservationType{
                            Id = 2,
                            User = Bob,
                            StartDate = DateTime.Parse("May 25, 2022, 13:00:00"),
                            EndDate = DateTime.Parse("May 25, 2022, 17:00:00")
                        },
                        new ReservationType{
                            Id = 3,
                            User = Kara,
                            StartDate = DateTime.Parse("May 26, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 26, 2022, 17:00:00")
                        },
                        new ReservationType{
                            Id = 4,
                            User = Wim,
                            StartDate = DateTime.Parse("May 27, 2022, 14:00:00"),
                            EndDate = DateTime.Parse("May 27, 2022, 16:00:00")
                        },new ReservationType{
                            Id = 5,
                            User = Kara,
                            StartDate = DateTime.Parse("May 31, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 31, 2022, 12:00:00")
                        },
                        new ReservationType{
                            Id = 6,
                            User = Bob,
                            StartDate = DateTime.Parse("May 31, 2022, 13:00:00"),
                            EndDate = DateTime.Parse("May 31, 2022, 17:00:00")
                        }
                    },
                    Owner = Kara,
                    Users = new List<UserType>{
                        Kara,
                        Bob,
                        Wim
                    }
                },
                new CarType{
                    Id = 2,
                    Name = "BMW M4",
                    Colour = "Gray",
                    Type = "bmw2022sideview",
                    Odometer = 2090,
                    Reserved = true,
                    MaxRange = 527,
                    Tank = 59,
                    Trips = new List<TripType>{
                        new TripType{
                            Id = 1,
                            User = Kara,
                            Date = DateTime.Parse("May 22, 2022, 11:00:00"),
                            Distance = 22
                        },
                        new TripType{
                            Id = 2,
                            User = Bob,
                            Date = DateTime.Parse("May 22, 2022, 14:30:00"),
                            Distance = 80
                        },
                        new TripType{
                            Id = 3,
                            User = Kara,
                            Date = DateTime.Parse("May 23, 2022, 17:00:00"),
                            Distance = 22
                        },
                        new TripType{
                            Id = 4,
                            User = Wim,
                            Date = DateTime.Parse("May 24, 2022, 09:25:00"),
                            Distance = 134
                        },
                    },
                    Transactions = new List<TransactionType>{
                        new TransactionType{
                            Id = 1,
                            User = Kara,
                            Date = DateTime.Parse("May 12, 2022, 11:00:00"),
                            Liters = 10,
                            Amount = 21.79
                        },
                        new TransactionType{
                            Id = 2,
                            User = Bob,
                            Date = DateTime.Parse("May 14, 2022, 11:00:00"),
                            Liters = 3,
                            Amount = 6.54
                        },
                        new TransactionType{
                            Id = 3,
                            User = Kara,
                            Date = DateTime.Parse("May 15, 2022, 11:00:00"),
                            Liters = 22,
                            Amount = 47.94
                        },
                        new TransactionType{
                            Id = 4,
                            User = Wim,
                            Date = DateTime.Parse("May 20, 2022, 11:00:00"),
                            Liters = 42,
                            Amount = 91.51
                        },
                    },
                    Reservations = new List<ReservationType>{
                        new ReservationType{
                            Id = 1,
                            User = Kara,
                            StartDate = DateTime.Parse("May 25, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 25, 2022, 12:00:00")
                        },
                        new ReservationType{
                            Id = 2,
                            User = Bob,
                            StartDate = DateTime.Parse("May 25, 2022, 13:00:00"),
                            EndDate = DateTime.Parse("May 25, 2022, 17:00:00")
                        },
                        new ReservationType{
                            Id = 3,
                            User = Kara,
                            StartDate = DateTime.Parse("May 26, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 26, 2022, 17:00:00")
                        },
                        new ReservationType{
                            Id = 4,
                            User = Wim,
                            StartDate = DateTime.Parse("May 30, 2022, 14:00:00"),
                            EndDate = DateTime.Parse("May 30, 2022, 16:00:00")
                        },new ReservationType{
                            Id = 5,
                            User = Kara,
                            StartDate = DateTime.Parse("May 31, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 31, 2022, 12:00:00")
                        },
                        new ReservationType{
                            Id = 6,
                            User = Bob,
                            StartDate = DateTime.Parse("May 31, 2022, 13:00:00"),
                            EndDate = DateTime.Parse("May 31, 2022, 17:00:00")
                        }
                    },
                    Owner = Kara,
                    Users = new List<UserType>{
                        Kara,
                        Bob,
                        Wim
                    }
                },
                new CarType{
                    Id = 3,
                    Name = "Porsche Taycan",
                    Colour = "White",
                    Type = "porschetaycan",
                    Odometer = 2090,
                    Reserved = false,
                    MaxRange = 772,
                    Tank = 80,
                    Trips = new List<TripType>{
                        new TripType{
                            Id = 1,
                            User = Kara,
                            Date = DateTime.Parse("May 22, 2022, 11:00:00"),
                            Distance = 22
                        },
                        new TripType{
                            Id = 2,
                            User = Bob,
                            Date = DateTime.Parse("May 22, 2022, 14:30:00"),
                            Distance = 80
                        },
                        new TripType{
                            Id = 3,
                            User = Kara,
                            Date = DateTime.Parse("May 23, 2022, 17:00:00"),
                            Distance = 22
                        },
                        new TripType{
                            Id = 4,
                            User = Wim,
                            Date = DateTime.Parse("May 24, 2022, 09:25:00"),
                            Distance = 134
                        },
                    },
                    Transactions = new List<TransactionType>{
                        new TransactionType{
                            Id = 1,
                            User = Kara,
                            Date = DateTime.Parse("May 12, 2022, 11:00:00"),
                            Liters = 10,
                            Amount = 21.79
                        },
                        new TransactionType{
                            Id = 2,
                            User = Bob,
                            Date = DateTime.Parse("May 14, 2022, 11:00:00"),
                            Liters = 3,
                            Amount = 6.54
                        },
                        new TransactionType{
                            Id = 3,
                            User = Kara,
                            Date = DateTime.Parse("May 15, 2022, 11:00:00"),
                            Liters = 22,
                            Amount = 47.94
                        },
                        new TransactionType{
                            Id = 4,
                            User = Wim,
                            Date = DateTime.Parse("May 20, 2022, 11:00:00"),
                            Liters = 42,
                            Amount = 91.51
                        },
                    },
                    Reservations = new List<ReservationType>{
                        new ReservationType{
                            Id = 1,
                            User = Kara,
                            StartDate = DateTime.Parse("May 25, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 25, 2022, 12:00:00")
                        },
                        new ReservationType{
                            Id = 2,
                            User = Bob,
                            StartDate = DateTime.Parse("May 25, 2022, 13:00:00"),
                            EndDate = DateTime.Parse("May 25, 2022, 17:00:00")
                        },
                        new ReservationType{
                            Id = 3,
                            User = Kara,
                            StartDate = DateTime.Parse("May 26, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 26, 2022, 17:00:00")
                        },
                        new ReservationType{
                            Id = 4,
                            User = Wim,
                            StartDate = DateTime.Parse("May 27, 2022, 14:00:00"),
                            EndDate = DateTime.Parse("May 27, 2022, 16:00:00")
                        },new ReservationType{
                            Id = 5,
                            User = Kara,
                            StartDate = DateTime.Parse("May 31, 2022, 09:00:00"),
                            EndDate = DateTime.Parse("May 31, 2022, 12:00:00")
                        },
                        new ReservationType{
                            Id = 6,
                            User = Bob,
                            StartDate = DateTime.Parse("May 31, 2022, 13:00:00"),
                            EndDate = DateTime.Parse("May 31, 2022, 17:00:00")
                        }
                    },
                    Owner = Kara,
                    Users = new List<UserType>{
                        Kara,
                        Bob,
                        Wim
                    }
                }
            };
        }

    }
}

