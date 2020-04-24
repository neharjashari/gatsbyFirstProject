import React from "react"
import Desktops from "./Products/Desktop"
import Laptops from "./Products/Laptop"
import Tablets from "./Products/Tablet"
import Smartphones from "./Products/Smartphone"

const Products = props => {
  switch (props.category) {
    case 0:
      return <Desktops />
      break

    case 1:
      return <Laptops />
      break

    case 2:
      return <Tablets />
      break

    case 3:
      return <Smartphones />
      break

    default:
      return (
        <h2 style={{ textAlign: "center" }}>
          No Products available for the moment
        </h2>
      )
      break
  }
}

export default Products

// import React from "react"
// import Button from "@material-ui/core/Button"
// import Card from "@material-ui/core/Card"
// import CardActions from "@material-ui/core/CardActions"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import CssBaseline from "@material-ui/core/CssBaseline"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
// import { makeStyles } from "@material-ui/core/styles"
// import Container from "@material-ui/core/Container"

// const useStyles = makeStyles(theme => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }))

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// export default function Album() {
//   const classes = useStyles()

//   return (
//     <React.Fragment>
//       <h1 style={{ textAlign: "center", paddingTop: "40px" }}>Main Products</h1>
//       <CssBaseline />
//       <main>
//         <Container className={classes.cardGrid} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map(card => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image="https://source.unsplash.com/random"
//                     title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Product
//                     </Typography>
//                     <Typography>
//                       Do ipsum ipsum est id culpa et pariatur ea ullamco sint
//                       qui. Incididunt magna duis enim dolor tempor aute
//                       excepteur.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       View
//                     </Button>
//                     <Button size="small" color="primary">
//                       Edit
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </React.Fragment>
//   )
// }
